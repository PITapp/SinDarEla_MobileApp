using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SinDarElaMobile.Models.DbSinDarEla
{
  [Table("TextbausteineHTML")]
  public partial class TextbausteineHtml
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int TextbausteinID
    {
      get;
      set;
    }
    public string Code
    {
      get;
      set;
    }
    public string Titel
    {
      get;
      set;
    }
    public string Inhalt
    {
      get;
      set;
    }
    public int? Sortierung
    {
      get;
      set;
    }
  }
}
