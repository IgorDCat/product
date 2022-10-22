export type Mods = Record<string, string | boolean | undefined>;

export function classNames(cls: string, mods: Mods = {}, additional: Array<string | undefined> = []) {
    return [
        cls,
        ...Object.keys(mods).filter(key => mods[key]),
        ...additional.filter(Boolean),
        //Object.entries(mods).filter(([value]) => Boolean(value)).map(([className]) => className)
    ].join(" ")
}