using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlmostTrello.DataEntities.DataModels
{
    public partial class User
    {
        public string Id { get; set; } = null!;
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }

}
