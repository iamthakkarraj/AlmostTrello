using AlmostTrello.BusinessEntities.ViewModels;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlmostTrello.Utilities.Helpers
{
    public static class Helper
    {
        public static T? JsonCast<T>(this object myobj)
        {
            return JsonConvert.DeserializeObject<T>(JsonConvert.SerializeObject(myobj,
                new JsonSerializerSettings
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                    NullValueHandling = NullValueHandling.Ignore
                }));
        }

    }
}
