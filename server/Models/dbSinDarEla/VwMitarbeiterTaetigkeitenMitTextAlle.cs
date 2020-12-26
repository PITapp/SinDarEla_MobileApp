using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SinDarElaMobile.Models.DbSinDarEla
{
  [Table("vwMitarbeiterTaetigkeitenMitTextAlle")]
  public partial class VwMitarbeiterTaetigkeitenMitTextAlle
  {
    [Key]
    public Int64 MitarbeiterTaetigkeitenArtID
    {
      get;
      set;
    }
    public Int64 BisMitarbeiterTaetigkeitenArtID
    {
      get;
      set;
    }
    public string TaetigkeitArt
    {
      get;
      set;
    }
  }
}
