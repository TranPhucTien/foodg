import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DefaultLayout } from '~/Layouts';
import { publicRoutes } from '~/routes';

// Fix don't scroll to top when router change
// const ScrollToTop = ({ children }) => {
//     const location = useLocation();
//     useLayoutEffect(() => {
//         document.documentElement.scrollTo(0, 0);
//     }, [location.pathname]);
//     return children;
// };

function App() {
    return (
        <Router>
            <>
                <ToastContainer autoClose={2000} position="bottom-right" />
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        if (route.Layout) {
                            Layout = route.Layout;
                        } else if (route.Layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </>
        </Router>
    );
}

export default App;
