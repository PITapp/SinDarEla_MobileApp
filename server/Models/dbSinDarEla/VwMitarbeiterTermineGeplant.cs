using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SinDarElaMobile.Models.DbSinDarEla
{
  [Table("vwMitarbeiterTermineGeplant")]
  public partial class VwMitarbeiterTermineGeplant
  {
    public int EreignisID
    {
      get;
      set;
    }
    [Key]
    public string EreignisArtCode
    {
      get;
      set;
    }
    public int BaseID
    {
      get;
      set;
    }
    public int? KundenID
    {
      get;
      set;
    }
    public int MitarbeiterID
    {
      get;
      set;
    }
    public string Jahr
    {
      get;
      set;
    }
    public string Am
    {
      get;
      set;
    }
    public string Von
    {
      get;
      set;
    }
    public string Bis
    {
      get;
      set;
    }
    public Int64? Minuten
    {
      get;
      set;
    }
    public string Stunden
    {
      get;
      set;
    }
    public string Mitarbeiter
    {
      get;
      set;
    }
  }
}
