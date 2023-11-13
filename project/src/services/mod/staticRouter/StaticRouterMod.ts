import { RouteAction, StaticRouter } from "@spt-aki/di/Router";

export class StaticRouterMod extends StaticRouter
{
    public constructor(
        routes: RouteAction[],
        private topLevelRoute: string,
    )
    {
        super(routes);
    }

    public override getTopLevelRoute(): string
    {
        return this.topLevelRoute;
    }
}
