import { useAuth } from "../Store/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { authorizationToken, API } = useAuth();

    const getAllUsersData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API}/api/admin/users`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                },
            });

            if (!response.ok) {
                toast.error("Failed to load users");
                setUsers([]);
                return;
            }

            const data = await response.json();
            const usersList = Array.isArray(data)
                ? data
                : Array.isArray(data.users)
                ? data.users
                : [];

            setUsers(usersList);
        } catch (error) {
            console.error("Network error:", error);
            toast.error("Network error while loading users");
            setUsers([]);
        } finally {
            setLoading(false);
        }
    };

    const deleteUser = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`${API}/api/admin/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                },
            });

            if (!response.ok) {
                toast.error("Failed to delete user");
                return;
            }

            toast.success("User deleted successfully!");
            getAllUsersData();
        } catch (error) {
            console.error("Delete error:", error);
            toast.error("Something went wrong while deleting");
        }
    };

    useEffect(() => {
        getAllUsersData();
    }, [authorizationToken]);

    return (
        <section className="p-2 md:p-4">

            {/* Header */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                        All Users
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Manage and monitor all registered users
                    </p>
                </div>
                {!loading && (
                    <div className="bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-full">
                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
                            {users.length} {users.length === 1 ? "User" : "Users"}
                        </span>
                    </div>
                )}
            </div>

            {/* Loading */}
            {loading ? (
                <div className="flex items-center justify-center py-20">
                    <div className="text-center">
                        <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                        <p className="text-gray-500 text-sm">Loading users...</p>
                    </div>
                </div>

            ) : users.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                        <span className="text-3xl">👤</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">No users found</h3>
                    <p className="text-sm text-gray-400 mt-1">Users will appear here once registered</p>
                </div>

            ) : (
                <>
                    {/* DESKTOP TABLE */}
                    <div className="hidden md:block bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">

                        {/* ✅ Max height + scroll sirf tbody pe — thead sticky rahega */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">

                                {/* ✅ STICKY THEAD */}
                                <thead className="sticky top-0 z-10">
                                    <tr className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                                        <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider w-12">
                                            #
                                        </th>
                                        <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Phone
                                        </th>
                                        <th className="text-center px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                    {users.map((curUser, index) => (
                                        <tr
                                            key={curUser._id}
                                            className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150"
                                        >
                                            <td className="px-6 py-4 text-gray-400 text-xs font-medium">
                                                {index + 1}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                                                        {curUser.username?.charAt(0).toUpperCase() || "U"}
                                                    </div>
                                                    <span className="font-medium text-gray-800 dark:text-white">
                                                        {curUser.username || "N/A"}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                                                {curUser.email || "N/A"}
                                            </td>
                                            <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                                                {curUser.phone || "N/A"}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-center gap-2">
                                                    <Link to={`/admin/users/${curUser._id}/edit`}>
                                                        <button className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold rounded-lg hover:bg-indigo-100 transition-colors">
                                                            Edit
                                                        </button>
                                                    </Link>
                                                    <button
                                                        onClick={() => deleteUser(curUser._id)}
                                                        className="px-3 py-1.5 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-semibold rounded-lg hover:bg-red-100 transition-colors"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Table Footer */}
                        <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-xs text-gray-400">
                                Showing <span className="font-semibold text-gray-600 dark:text-gray-300">{users.length}</span> registered users
                            </p>
                        </div>
                    </div>

                    {/* MOBILE CARDS — same as before */}
                    <div className="md:hidden space-y-3">
                        {users.map((curUser, index) => (
                            <div
                                key={curUser._id}
                                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-sm"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                                            {curUser.username?.charAt(0).toUpperCase() || "U"}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800 dark:text-white text-sm">
                                                {curUser.username || "N/A"}
                                            </p>
                                            <p className="text-xs text-gray-400">#{index + 1}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2 mb-2">
                                    <span className="text-xs font-semibold text-gray-400 uppercase w-12 shrink-0 pt-0.5">Email</span>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 break-all">{curUser.email || "N/A"}</p>
                                </div>

                                <div className="flex items-start gap-2 mb-4">
                                    <span className="text-xs font-semibold text-gray-400 uppercase w-12 shrink-0 pt-0.5">Phone</span>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{curUser.phone || "N/A"}</p>
                                </div>

                                <div className="flex gap-2">
                                    <Link to={`/admin/users/${curUser._id}/edit`} className="flex-1">
                                        <button className="w-full py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold rounded-xl hover:bg-indigo-100 transition-colors">
                                            Edit
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => deleteUser(curUser._id)}
                                        className="flex-1 py-2 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-semibold rounded-xl hover:bg-red-100 transition-colors"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}

                        <p className="text-xs text-gray-400 text-center pt-2">
                            Total {users.length} registered users
                        </p>
                    </div>
                </>
            )}
        </section>
    );
};

export default AdminUsers;