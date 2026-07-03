DROP POLICY IF EXISTS "Authenticated users can update leads" ON public.leads;
REVOKE UPDATE, DELETE ON public.leads FROM authenticated;