import { Outlet } from "react-router-dom";
import { Header } from "../../shared/ui/Header/Header";

export const MainLayout = () => {
    return (
    <>
    <Header />
    <main className="max-w-6xl mx-auto px-4">
    <Outlet />
    </main>
    </>
    )
}