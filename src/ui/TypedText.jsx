import { TypeAnimation } from 'react-type-animation';

export const TypedText = () => {
    return (
        <TypeAnimation
        sequence={[
            "Hi, my name is Marcos Furco",
            1000,
        ]}
        wrapper="h1"
        speed={20}
        repeat={Infinity}
        />
    )
}