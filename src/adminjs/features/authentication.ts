import { AuthenticationOptions } from "@adminjs/express";
import { User } from "../../models/initializerModels/initializerModels.js";
import bcrypt from "bcrypt";


export const authenticateOptions: AuthenticationOptions = {
    authenticate: async (email, password, ctx) => {
        const user = await User.findOne({ where: { email } });
        if (user && user.role === "admin") {
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if (isPasswordCorrect) return user;
        }
        return false;
    },
    cookiePassword: "test"
}

/*
    1- Buscar o usuario no banco usando o email
    2- Verificar se o usuario (email) corresponde, e
    verificar se é um admin.
    3- Se for um admin, verificar se a senha fornecida,
    e igual a senha armazenada no banco de dados. Se verdadeiro,
    retorne o user. Se não retorne falso.
*/