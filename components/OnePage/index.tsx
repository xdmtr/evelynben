import { ReactNode } from "react";

interface onePageProps{
    children?: JSX.Element | ReactNode;
    className?: string;
    id?: string;
}

const OnePage: React.FC<onePageProps> = ({children, className, id}) => {
    return(
        <div className={`min-h-screen overflow-hidden flex items-center  ${className}`} id={id}>
            {children}
        </div>
    )
}

export default OnePage;