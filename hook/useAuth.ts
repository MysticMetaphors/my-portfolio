import { useQuery, useQueryClient } from '@tanstack/react-query';

export const useAuth = () => {
  const queryClient = useQueryClient();
  const { data: user } = <any>useQuery({
    queryKey: ['authUser'],
    queryFn: () => user,
    staleTime: Infinity,
  });

  const logout = () => {
    queryClient.removeQueries({ queryKey: ['authUser'] });
    window.location.href = '/auth/logout';
  };

  return {
    user,
    isAuthenticated: !!user,
    logout,
  };
};