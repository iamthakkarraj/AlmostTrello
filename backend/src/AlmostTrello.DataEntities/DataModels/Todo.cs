using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlmostTrello.DataEntities.DataModels
{
    public partial class Todo
    {
        public string Id { get; set; } = null!;

        public string? Title { get; set; }

        public string? Description { get; set; }

        public string? Status { get; set; }

        public string? DueDate { get; set; }

    }

}
