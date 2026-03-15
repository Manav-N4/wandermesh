import { createContext, useState, ReactNode, useContext } from 'react';

interface InviteModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const InviteModalContext = createContext<InviteModalContextType | undefined>(undefined);

export const InviteModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <InviteModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </InviteModalContext.Provider>
  );
};

export const useInviteModal = () => {
  const context = useContext(InviteModalContext);
  if (!context) {
    throw new Error('useInviteModal must be used within InviteModalProvider');
  }
  return context;
};
