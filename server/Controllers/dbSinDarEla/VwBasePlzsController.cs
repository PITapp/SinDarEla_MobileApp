using System;
using System.Net;
using System.Data;
using System.Linq;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNet.OData;
using Microsoft.AspNet.OData.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.AspNet.OData.Query;



namespace SinDarElaMobile.Controllers.DbSinDarEla
{
  using Models;
  using Data;
  using Models.DbSinDarEla;

  [ODataRoutePrefix("odata/dbSinDarEla/VwBasePlzs")]
  [Route("mvc/odata/dbSinDarEla/VwBasePlzs")]
  public partial class VwBasePlzsController : ODataController
  {
    private Data.DbSinDarElaContext context;

    public VwBasePlzsController(Data.DbSinDarElaContext context)
    {
      this.context = context;
    }
    // GET /odata/DbSinDarEla/VwBasePlzs
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbSinDarEla.VwBasePlz> GetVwBasePlzs()
    {
      var items = this.context.VwBasePlzs.AsNoTracking().AsQueryable<Models.DbSinDarEla.VwBasePlz>();
      this.OnVwBasePlzsRead(ref items);

      return items;
    }

    partial void OnVwBasePlzsRead(ref IQueryable<Models.DbSinDarEla.VwBasePlz> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{PLZ}")]
    public SingleResult<VwBasePlz> GetVwBasePlz(string key)
    {
        var items = this.context.VwBasePlzs.AsNoTracking().Where(i=>i.PLZ == key);
        this.OnVwBasePlzsGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnVwBasePlzsGet(ref IQueryable<Models.DbSinDarEla.VwBasePlz> items);

  }
}
