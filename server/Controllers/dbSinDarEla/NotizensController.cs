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

  [ODataRoutePrefix("odata/dbSinDarEla/Notizens")]
  [Route("mvc/odata/dbSinDarEla/Notizens")]
  public partial class NotizensController : ODataController
  {
    private Data.DbSinDarElaContext context;

    public NotizensController(Data.DbSinDarElaContext context)
    {
      this.context = context;
    }
    // GET /odata/DbSinDarEla/Notizens
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.DbSinDarEla.Notizen> GetNotizens()
    {
      var items = this.context.Notizens.AsQueryable<Models.DbSinDarEla.Notizen>();
      this.OnNotizensRead(ref items);

      return items;
    }

    partial void OnNotizensRead(ref IQueryable<Models.DbSinDarEla.Notizen> items);

    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{NotizID}")]
    public SingleResult<Notizen> GetNotizen(int key)
    {
        var items = this.context.Notizens.Where(i=>i.NotizID == key);
        this.OnNotizensGet(ref items);

        return SingleResult.Create(items);
    }

    partial void OnNotizensGet(ref IQueryable<Models.DbSinDarEla.Notizen> items);

    partial void OnNotizenDeleted(Models.DbSinDarEla.Notizen item);

    [HttpDelete("{NotizID}")]
    public IActionResult DeleteNotizen(int key)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var itemToDelete = this.context.Notizens
                .Where(i => i.NotizID == key)
                .FirstOrDefault();

            if (itemToDelete == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            this.OnNotizenDeleted(itemToDelete);
            this.context.Notizens.Remove(itemToDelete);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnNotizenUpdated(Models.DbSinDarEla.Notizen item);

    [HttpPut("{NotizID}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PutNotizen(int key, [FromBody]Models.DbSinDarEla.Notizen newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.NotizID != key))
            {
                return BadRequest();
            }

            this.OnNotizenUpdated(newItem);
            this.context.Notizens.Update(newItem);
            this.context.SaveChanges();

            var itemToReturn = this.context.Notizens.Where(i => i.NotizID == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{NotizID}")]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult PatchNotizen(int key, [FromBody]Delta<Models.DbSinDarEla.Notizen> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var itemToUpdate = this.context.Notizens.Where(i => i.NotizID == key).FirstOrDefault();

            if (itemToUpdate == null)
            {
                ModelState.AddModelError("", "Item no longer available");
                return BadRequest(ModelState);
            }

            patch.Patch(itemToUpdate);

            this.OnNotizenUpdated(itemToUpdate);
            this.context.Notizens.Update(itemToUpdate);
            this.context.SaveChanges();

            var itemToReturn = this.context.Notizens.Where(i => i.NotizID == key);
            return new ObjectResult(SingleResult.Create(itemToReturn));
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnNotizenCreated(Models.DbSinDarEla.Notizen item);

    [HttpPost]
    [EnableQuery(MaxExpansionDepth=10,MaxAnyAllExpressionDepth=10,MaxNodeCount=1000)]
    public IActionResult Post([FromBody] Models.DbSinDarEla.Notizen item)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (item == null)
            {
                return BadRequest();
            }

            this.OnNotizenCreated(item);
            this.context.Notizens.Add(item);
            this.context.SaveChanges();

            return Created($"odata/DbSinDarEla/Notizens/{item.NotizID}", item);
        }
        catch(Exception ex)
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
