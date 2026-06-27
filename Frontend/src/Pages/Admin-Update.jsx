import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../Store/auth";
import { toast } from "react-toastify";

const AdminUpdate = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
    });

    const { id } = useParams(); 
    const navigate = useNavigate();
    const { authorizationToken, API } = useAuth();

    //  Get single user
    const getSingleUserData = async () => {
        try {
            const response = await fetch(
                `${API}/api/admin/users/${id}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: authorizationToken,
                    },
                }
            );

            const resData = await response.json();

            if (response.ok) {
                const user = resData.user || resData;

                setData({
                    username: user.username || "",
                    email: user.email || "",
                    phone: user.phone || "",
                });
            } else {
                toast.error(resData.message || "User not found!");
            }
        } catch (error) {
            console.error("Fetch user error:", error);
            toast.error("Server error!");
        }
    };

    useEffect(() => {
        if (id) {
            getSingleUserData();
        }
    }, [id]); //  FIX

    //  Input handler
    const handleInput = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    //  Update user
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `${API}/api/admin/users/update/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: authorizationToken,
                    },
                    body: JSON.stringify(data),
                }
            );

            const resData = await response.json();

            if (response.ok) {
                toast.success("User updated successfully!");
                navigate("/admin/users");
            } else {
                toast.error(resData.message || "Update failed!");
            }
        } catch (error) {
            console.error("Update error:", error);
            toast.error("Server error!");
        }
    };

    return (
        <div className="section-login">
            <div className="container grid grid-two-cols">

                <div className="register-logo">
                    <img
                        src="https://cdni.iconscout.com/illustration/premium/thumb/login-security-illustration-svg-download-png-7271013.png"
                        alt="update"
                    />
                </div>

                <div className="register-form">
                    <h1 className="text-2xl">Update User</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>User Name</label>
                            <input
                                type="text"
                                name="username"
                                value={data.username}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={data.phone}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <button type="submit" className="btn">
                            Update
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AdminUpdate;
