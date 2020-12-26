using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SinDarElaMobile.Models.DbSinDarEla
{
  [Table("vwMitarbeiterStatusMitTextAlle")]
  public partial class VwMitarbeiterStatusMitTextAlle
  {
    [Key]
    public Int64 MitarbeiterStatusID
    {
      get;
      set;
    }
    public Int64 BisMitarbeiterStatusID
    {
      get;
      set;
    }
    public string Status
    {
      get;
      set;
    }
    public Int64? Sortierung
    {
      get;
      set;
    }
  }
}
