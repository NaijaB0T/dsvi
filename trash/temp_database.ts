export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      pages: {
        Row: {
          created_at: string | null
          id: string
          meta_description: string | null
          page_slug: string
          page_type: string | null
          school_id: string
          sections: Json | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          meta_description?: string | null
          page_slug: string
          page_type?: string | null
          school_id: string
          sections?: Json | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          meta_description?: string | null
          page_slug?: string
          page_type?: string | null
          school_id?: string
          sections?: Json | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pages_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      project_task_audit: {
        Row: {
          action: string
          id: string
          new_values: Json | null
          old_values: Json | null
          task_id: string
          timestamp: string | null
          user_agent: string | null
        }
        Insert: {
          action: string
          id?: string
          new_values?: Json | null
          old_values?: Json | null
          task_id: string
          timestamp?: string | null
          user_agent?: string | null
        }
        Update: {
          action?: string
          id?: string
          new_values?: Json | null
          old_values?: Json | null
          task_id?: string
          timestamp?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      project_tasks: {
        Row: {
          approved: boolean | null
          category: string
          completed: boolean | null
          created_at: string | null
          estimated_hours: number
          id: string
          notes: string | null
          priority: string | null
          sub_category: string
          title: string
          updated_at: string | null
        }
        Insert: {
          approved?: boolean | null
          category: string
          completed?: boolean | null
          created_at?: string | null
          estimated_hours: number
          id: string
          notes?: string | null
          priority?: string | null
          sub_category: string
          title: string
          updated_at?: string | null
        }
        Update: {
          approved?: boolean | null
          category?: string
          completed?: boolean | null
          created_at?: string | null
          estimated_hours?: number
          id?: string
          notes?: string | null
          priority?: string | null
          sub_category?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      school_requests: {
        Row: {
          admin_email: string
          admin_name: string
          created_at: string | null
          id: string
          message: string | null
          phone: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          school_name: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          admin_email: string
          admin_name: string
          created_at?: string | null
          id?: string
          message?: string | null
          phone?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          school_name: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          admin_email?: string
          admin_name?: string
          created_at?: string | null
          id?: string
          message?: string | null
          phone?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          school_name?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      schools: {
        Row: {
          admin_user_id: string | null
          auto_renewal: boolean | null
          contact_info: Json | null
          created_at: string | null
          custom_css: string | null
          id: string
          last_reminder_sent: string | null
          logo_url: string | null
          name: string
          package_type: string | null
          payment_status: string | null
          slug: string
          subscription_end: string | null
          subscription_notes: string | null
          subscription_start: string | null
          subscription_status: string | null
          theme_settings: Json | null
          theme_version: number | null
          updated_at: string | null
        }
        Insert: {
          admin_user_id?: string | null
          auto_renewal?: boolean | null
          contact_info?: Json | null
          created_at?: string | null
          custom_css?: string | null
          id?: string
          last_reminder_sent?: string | null
          logo_url?: string | null
          name: string
          package_type?: string | null
          payment_status?: string | null
          slug: string
          subscription_end?: string | null
          subscription_notes?: string | null
          subscription_start?: string | null
          subscription_status?: string | null
          theme_settings?: Json | null
          theme_version?: number | null
          updated_at?: string | null
        }
        Update: {
          admin_user_id?: string | null
          auto_renewal?: boolean | null
          contact_info?: Json | null
          created_at?: string | null
          custom_css?: string | null
          id?: string
          last_reminder_sent?: string | null
          logo_url?: string | null
          name?: string
          package_type?: string | null
          payment_status?: string | null
          slug?: string
          subscription_end?: string | null
          subscription_notes?: string | null
          subscription_start?: string | null
          subscription_status?: string | null
          theme_settings?: Json | null
          theme_version?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      subscription_history: {
        Row: {
          action: string
          amount: number | null
          created_at: string | null
          created_by: string | null
          id: string
          new_end_date: string | null
          new_package: string | null
          notes: string | null
          payment_method: string | null
          previous_end_date: string | null
          previous_package: string | null
          school_id: string
        }
        Insert: {
          action: string
          amount?: number | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          new_end_date?: string | null
          new_package?: string | null
          notes?: string | null
          payment_method?: string | null
          previous_end_date?: string | null
          previous_package?: string | null
          school_id: string
        }
        Update: {
          action?: string
          amount?: number | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          new_end_date?: string | null
          new_package?: string | null
          notes?: string | null
          payment_method?: string | null
          previous_end_date?: string | null
          previous_package?: string | null
          school_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscription_history_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_reminders: {
        Row: {
          delivery_method: string | null
          id: string
          message_content: string | null
          reminder_type: string
          school_id: string
          sent_at: string | null
          sent_by: string | null
        }
        Insert: {
          delivery_method?: string | null
          id?: string
          message_content?: string | null
          reminder_type: string
          school_id: string
          sent_at?: string | null
          sent_by?: string | null
        }
        Update: {
          delivery_method?: string | null
          id?: string
          message_content?: string | null
          reminder_type?: string
          school_id?: string
          sent_at?: string | null
          sent_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscription_reminders_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      assign_school_admin: {
        Args: { p_school_id: string; p_user_id: string }
        Returns: boolean
      }
      get_subscription_stats: {
        Args: Record<PropertyKey, never>
        Returns: {
          total_schools: number
          active_subscriptions: number
          expiring_subscriptions: number
          inactive_subscriptions: number
          standard_packages: number
          advanced_packages: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const

