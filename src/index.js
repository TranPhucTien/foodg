import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from '~/App';
import '~/assets/styles/grid.scss';
import store from '~/app/store';
import GlobalStyles from './components/GlobalStyles';
import reportWebVitals from './reportWebVitals';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <GlobalStyles>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <App />
            </Provider>
        </QueryClientProvider>
    </GlobalStyles>,
    // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
