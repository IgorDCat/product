import {render} from "react-dom";
import React from "react";
import {App} from "app/App";
import {StoreProvider} from "app/providers/StoreProvider";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/themeProvider";
import "shared/config/i18n/i18n";
import {ErrorBoundary} from "app/providers/ErrorBoundary";

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById("root")
);