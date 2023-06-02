'use client';

interface ContainerProps {
    children: React.ReactNode;
}

const Container = ({children}: ContainerProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Container