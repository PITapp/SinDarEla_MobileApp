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
using Microsoft.AspNet.OData.Query;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;



namespace SinDarElaMobile.Controllers.DbSinDarEla
{
  using Models;
  using Data;
  using Models.DbSinDarEla;

  [ODataRoutePrefix("odata/dbSinDarEla/VwBaseAlles")]
  [Route("mvc/odata/dbSinDarEla/VwBaseAlles")]
  public partial class VwBaseAllesController : ODataController
  {
    private Data.DbSinDarElaContext context;

    public VwBaseAllesController(Data.DbSinDarElaContext context)
    {
      this.context = context;
    }
    // GET /odata/DbSinDarEla/VwBaseAlles
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbSinDarEla.VwBaseAlle> GetVwBaseAlles()
    {
      var items = this.context.VwBaseAlles.AsNoTracking().AsQueryable<Models.DbSinDarEla.VwBaseAlle>();
      this.OnVwBaseAllesRead(ref items);

      return items;
    }

    partial void OnVwBaseAllesRead(ref IQueryable<Models.DbSinDarEla.VwBaseAlle> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{Name1}")]
    public SingleResult<VwBaseAlle> GetVwBaseAlle(string key)
    {
        var items = this.context.VwBaseAlles.AsNoTracking().Where(i=>i.Name1 == key);
        this.OnVwBaseAllesGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnVwBaseAllesGet(ref IQueryable<Models.DbSinDarEla.VwBaseAlle> items);

  }
}
