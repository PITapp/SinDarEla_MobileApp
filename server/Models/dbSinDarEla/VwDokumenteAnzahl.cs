using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SinDarElaMobile.Models.DbSinDarEla
{
  [Table("vwDokumenteAnzahl")]
  public partial class VwDokumenteAnzahl
  {
    [Key]
    public string Kategorie
    {
      get;
      set;
    }
    public Int64 AnzahlDokumente
    {
      get;
      set;
    }
  }
}
