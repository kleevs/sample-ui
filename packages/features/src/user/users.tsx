import React, { useState, useMemo } from "react";
import { useQuery } from '@tanstack/react-query';
import { Grid } from "@packages/design-system";

type UserType = Features.UserType;
type UsersProps = Features.AsProps<'UserCard' | 'AppLayout'> & {
	getUsers: (search: string) => Promise<UserType[]>;
	exportUsersToCSV: (users: Features.UserType[]) => void;
}

export function Users({ AppLayout, UserCard, exportUsersToCSV, getUsers, ...props }: UsersProps) {
   const [search, setSearch] = useState("");
    const { data: users = []} = useQuery({ queryKey: ['users', search], queryFn: () => getUsers(search) });
   
        const action = useMemo(() => <div className="flex gap-2"><input
               type="text"
               className="border border-gray-300 dark:border-gray-600 p-2 rounded w-full sm:w-1/2 shadow-sm bg-white dark:bg-gray-800 dark:text-white"
               placeholder="🔍 Rechercher un projet..."
               value={search}
               onChange={(e) => setSearch(e.target.value)}
             />
             <button
               onClick={() => exportUsersToCSV(users)}
               className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
             >⬇️ Exporter CSV</button>
    </div>, [exportUsersToCSV, setSearch]);
   
     return <AppLayout {...props} action={action}>
           <Grid>
             {users.length > 0 ? (
               users.map((user) => <UserCard key={user.email} user={user} />)
             ) : (
               <p className="col-span-full text-center text-gray-500 dark:text-gray-300">Aucun projet trouvé.</p>
             )}
        </Grid>
    </AppLayout>
}
