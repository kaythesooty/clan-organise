export interface Loner {
  name: string
  rank: string
  moons: number
}

export interface CatData extends Loner {
  clanId: number
}

export interface Cat extends CatData {
  id: number
}

export interface ClanData {
  name: string
  leaderId: number
  deputyId: number
  medcatId: number
}

export interface Clan extends ClanData {
  id: number
}
