import { PageContext } from "adminjs";
import { Category, Course, Episode, User } from "../../models/initializerModels/initializerModels.js";


export type DashboardDataTypes = {
    courses: number;
    episodes: number;
    categories: number;
    users: number;
};

export const dashboardHandler = async (
    req: any,
    res: any,
    context: PageContext
): Promise<void> => {

    const [courses, episodes, categories, users] = await Promise.all([
        Course.count(),
        Category.count(),
        Episode.count(),
        User.count({ where: { role: "user" } })
    ]);

    const resourceCount: DashboardDataTypes = {
        courses,
        episodes,
        categories,
        users,
    };

    res.json({
        Cursos: resourceCount.courses,
        Episódios: resourceCount.episodes,
        Categorias: resourceCount.categories,
        Usuários: resourceCount.users
    });
} 