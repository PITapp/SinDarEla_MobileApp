using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SinDarElaMobile.Models.DbSinDarEla
{
  [Table("vwEreignisseKundenbesucheHeuteOffen")]
  public partial class VwEreignisseKundenbesucheHeuteOffen
  {
    [Key]
    public int BaseID
    {
      get;
      set;
    }
    public Int64 EreignisseKundenbesucheOffen
    {
      get;
      set;
    }
  }
}
