
import Mail from "../lib/Mail";

export default {
    key: "registrationMail",
    options: {
        delay: 5000,
        priority: 3,
        repeat: {
            every: 1,
            limit: 100
        },
        lifo: true
    },
    async handle({data}){
        const {user} = data;
        await Mail.sendMail({
            from: "DIO  test@dio.test",
            to: `${user.name} ${user.email}`,
            subject: "Cadasto de usuario",
            html: ` Ola, ${user.name}, bem-vindo`
        });

    },
};
