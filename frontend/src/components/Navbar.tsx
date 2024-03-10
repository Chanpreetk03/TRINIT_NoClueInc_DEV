import {SignedIn, SignedOut, SignInButton, UserButton, useUser} from "@clerk/clerk-react";
import {Link, useLocation, useNavigate} from "react-router-dom";

const Navbar = () => {
    const {isSignedIn, user, isLoaded} = useUser();
    const navigate = useNavigate()
    const location = useLocation();
    if (!isLoaded) return <h1>Loading...</h1>;
    if (isSignedIn && user) {
        console.log(user);
        if (!user.unsafeMetadata.role && location.pathname !== "/role-signup") {
            navigate("/role-signup")
        }
    }
    const role: String = (user?.unsafeMetadata.role || null) as String;
    return (
        <div className="navbar bg-base-100 px-20">
            <div className="flex-1">
                <Link to={isSignedIn ? "/dashboard" : "/"} className="btn btn-ghost text-xl">LinguaConnect</Link>
                {role && <div className="badge badge-secondary">{role}</div>}
            </div>
            <div className="flex-none gap-2">
                {isSignedIn ? <div className="flex flex-row">
                    <div role="button">
                        <Link to="/explore" className="btn">Explore</Link>
                    </div>
                    <div role="button">
                        <Link to="/dashboard" className="btn">Dashboard</Link>
                    </div>
                </div> : <div></div>}

                <div tabIndex={0} role="button">
                    <SignedOut>
                        <a className="btn">
                            <SignInButton/>
                        </a>
                    </SignedOut>
                    <SignedIn>
                        <div className="btn btn-ghost btn-circle">
                            <UserButton/>
                        </div>
                    </SignedIn>
                </div>
            </div>
        </div>
    );
};

export default Navbar;