export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
    // Allows to automatically instantiate createClient with right options
    // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
    __InternalSupabase: {
        PostgrestVersion: "14.1"
    }
    public: {
        Tables: {
            network_volumes: {
                Row: {
                    created_at: string | null
                    id: string
                    left_pv: number | null
                    right_pv: number | null
                    updated_at: string | null
                    user_id: string
                }
                Insert: {
                    created_at?: string | null
                    id?: string
                    left_pv?: number | null
                    right_pv?: number | null
                    updated_at?: string | null
                    user_id: string
                }
                Update: {
                    created_at?: string | null
                    id?: string
                    left_pv?: number | null
                    right_pv?: number | null
                    updated_at?: string | null
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "network_volumes_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: true
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                ]
            }
            packages: {
                Row: {
                    created_at: string | null
                    direct_referral_bonus: number
                    id: string
                    name: string
                    pairing_bonus: number | null
                    point_value: number
                    price: number | null
                }
                Insert: {
                    created_at?: string | null
                    direct_referral_bonus: number
                    id?: string
                    name: string
                    pairing_bonus?: number | null
                    point_value: number
                    price?: number | null
                }
                Update: {
                    created_at?: string | null
                    direct_referral_bonus?: number
                    id?: string
                    name?: string
                    pairing_bonus?: number | null
                    point_value?: number
                    price?: number | null
                }
                Relationships: []
            }
            phone_otps: {
                Row: {
                    created_at: string | null
                    expires_at: string
                    id: string
                    otp_code: string
                    phone_number: string
                    verified: boolean | null
                }
                Insert: {
                    created_at?: string | null
                    expires_at: string
                    id?: string
                    otp_code: string
                    phone_number: string
                    verified?: boolean | null
                }
                Update: {
                    created_at?: string | null
                    expires_at?: string
                    id?: string
                    otp_code?: string
                    phone_number?: string
                    verified?: boolean | null
                }
                Relationships: []
            }
            profiles: {
                Row: {
                    auth_user_id: string | null
                    created_at: string | null
                    email: string | null
                    first_name: string | null
                    full_name: string | null
                    id: string
                    last_name: string | null
                    middle_name: string | null
                    package_id: string | null
                    parent_id: string | null
                    phone: string | null
                    position: string | null
                    sponsor_id: string | null
                    updated_at: string | null
                    username: string
                }
                Insert: {
                    auth_user_id?: string | null
                    created_at?: string | null
                    email?: string | null
                    first_name?: string | null
                    full_name?: string | null
                    id?: string
                    last_name?: string | null
                    middle_name?: string | null
                    package_id?: string | null
                    parent_id?: string | null
                    phone?: string | null
                    position?: string | null
                    sponsor_id?: string | null
                    updated_at?: string | null
                    username: string
                }
                Update: {
                    auth_user_id?: string | null
                    created_at?: string | null
                    email?: string | null
                    first_name?: string | null
                    full_name?: string | null
                    id?: string
                    last_name?: string | null
                    middle_name?: string | null
                    package_id?: string | null
                    parent_id?: string | null
                    phone?: string | null
                    position?: string | null
                    sponsor_id?: string | null
                    updated_at?: string | null
                    username?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "profiles_parent_id_fkey"
                        columns: ["parent_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "profiles_sponsor_id_fkey"
                        columns: ["sponsor_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                ]
            }
            transactions: {
                Row: {
                    amount: number
                    created_at: string | null
                    id: string
                    package_id: string | null
                    status: string
                    type: string
                    user_id: string
                }
                Insert: {
                    amount: number
                    created_at?: string | null
                    id?: string
                    package_id?: string | null
                    status: string
                    type: string
                    user_id: string
                }
                Update: {
                    amount?: number
                    created_at?: string | null
                    id?: string
                    package_id?: string | null
                    status?: string
                    type?: string
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "transactions_package_id_fkey"
                        columns: ["package_id"]
                        isOneToOne: false
                        referencedRelation: "packages"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "transactions_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "profiles"
                        referencedColumns: ["id"]
                    },
                ]
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            get_downline_count: {
                Args: {
                    user_id: string
                }
                Returns: number
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

// Simple type helpers for the public schema
export type Tables<TableName extends keyof Database['public']['Tables']> =
    Database['public']['Tables'][TableName]['Row']

export type TablesInsert<TableName extends keyof Database['public']['Tables']> =
    Database['public']['Tables'][TableName]['Insert']

export type TablesUpdate<TableName extends keyof Database['public']['Tables']> =
    Database['public']['Tables'][TableName]['Update']

export type Enums<EnumName extends keyof Database['public']['Enums']> =
    Database['public']['Enums'][EnumName]

export type CompositeTypes<TypeName extends keyof Database['public']['CompositeTypes']> =
    Database['public']['CompositeTypes'][TypeName]

export const Constants = {
    public: {
        Enums: {},
    },
} as const
