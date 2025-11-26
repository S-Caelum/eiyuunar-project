import './index.css';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router';
import RouterConfig from './routes.tsx';
import ProviderLayout from './components/layouts/provider-layout.tsx';
import ModalLayout from './components/layouts/modal-layout.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProviderLayout>
      <ModalLayout>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </ModalLayout>
    </ProviderLayout>
  </StrictMode>,
);
