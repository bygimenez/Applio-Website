"use client"
import { Database } from "@/app/types/database";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Avatar, Input } from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { PostgrestError } from "@supabase/supabase-js";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function UsersTable({ id }: { id: string }) {
    const supabase = createClientComponentClient<Database>();

    // Declara los estados para almacenar la lista de usuarios, los errores y userAdminData
    const [users, setUsers] = useState<any[] | null>(null);
    const [error, setError] = useState<PostgrestError | null>(null);
    const [search, setSearch] = useState('');
    const [userAdminData, setUserAdminData] = useState<any | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                // Realiza la consulta a la base de datos para obtener todos los usuarios
                const { data: userData, error: userError } = await supabase
                    .from("profiles")
                    .select("full_name, id, role");

                if (userError) {
                    setError(userError);
                } else {
                    // Almacena la lista de usuarios en el estado
                    setUsers(userData);
                }
            } catch (err: any) {
                // Maneja cualquier error que pueda ocurrir
                setError(err);
            }
        }

        // Llama a fetchData cuando el componente se monta
        fetchData();
    }, []);
    return (
        <section className="mb-24">
        <div className="hidden md:block m-4">
            <h1>{userAdminData?.full_name}</h1>
            <form style={{ marginBottom: '16px' }} className="mx-auto justify-center items-center">
                <Input
                    classNames={{
                        base: "max-w-[18rem] sm:max-w-[20rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search a user..."
                    size="sm"
                    startContent={<SearchIcon size={18} />}
                    type="search"
                    onChange={(e) => setSearch(e.target.value)} />
            </form>
            <div className="md:max-w-xl h-fit">
                <Table aria-label="Users table" >
                    <TableHeader>
                        <TableColumn>ID</TableColumn>
                        <TableColumn>NAME</TableColumn>
                        <TableColumn>ROLE</TableColumn>
                    </TableHeader>
                    <TableBody emptyContent={"Loading data..."}>
                    {(users || [])
                        ?.filter((item) => {
                        const itemName = item && item.full_name ? item.full_name.toLowerCase() : '';
                        const searchLower = search.toLowerCase();
                        return searchLower === '' ? true : itemName.includes(searchLower);
                        })
                        .map((user: any) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.full_name}</TableCell>
                            <TableCell>{user.role}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            </div>
        </section>
    );
}