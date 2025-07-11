import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SchoolPageRenderer from '@/components/templates/SchoolPageRenderer';
import { useSubdomainSchool } from '@/hooks/useSubdomainSchool';
import { getPageContent, createDefaultSections } from '@/lib/database';
import { PageContent } from '@/lib/types';
import { applyTheme } from '@/lib/theme-utils';

export function SubdomainSchoolPageDisplay() {
  const location = useLocation();
  const { school, loading: schoolLoading, error: schoolError } = useSubdomainSchool();
  const [pageContent, setPageContent] = useState<PageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get page type from URL path (remove leading slash)
  const pageType = location.pathname === '/' ? 'homepage' : location.pathname.slice(1);

  useEffect(() => {
    if (school) {
      fetchPageContent();
    }
  }, [school, pageType]);

  useEffect(() => {
    if (schoolLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [schoolLoading]);

  const fetchPageContent = async () => {
    if (!school) return;

    try {
      setLoading(true);
      setError(null);

      // Apply school theme if available
      if (school.theme_settings) {
        applyTheme(school.theme_settings, school.custom_css || '');
      }

      // Get specific page content
      const pageData = await getPageContent(school.id, pageType);
      
      if (!pageData) {
        // Create a default page if it doesn't exist
        const defaultPage: PageContent = {
          id: '',
          created_at: '',
          updated_at: '',
          school_id: school.id,
          page_slug: pageType,
          title: pageType === 'homepage' ? 'Welcome' : pageType?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Page',
          meta_description: `${pageType} page for ${school.name}`,
          sections: createDefaultSections(pageType)
        };
        setPageContent(defaultPage);
      } else {
        setPageContent(pageData);
      }
    } catch (error) {
      console.error('Error fetching page content:', error);
      setError('Failed to load page');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error || schoolError || !school) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>School Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {error || schoolError || 'The requested school could not be found.'}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!pageContent) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Page Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This page is coming soon. Please check back later.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{pageContent.title} - {school.name}</title>
        {pageContent.meta_description && (
          <meta name="description" content={pageContent.meta_description} />
        )}
      </Helmet>
      <SchoolPageRenderer 
        school={school} 
        pageContent={pageContent} 
        currentPage={pageType}
      />
    </>
  );
}
