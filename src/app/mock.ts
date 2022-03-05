import { Flight } from "./flight";
export class Mock {
  public static mflight:Flight[]=[
    {
      fullName:'panithi',
      from:'Thailand',
      to:'Korea',
      type:'one way',
      departure:new Date(),
      arrival:new Date(),
      adults:1,
      children:0,
      infants:0,
    }
  ]


}
