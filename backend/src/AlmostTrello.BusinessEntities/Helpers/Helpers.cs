using AlmostTrello.BusinessEntities.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlmostTrello.DataAccess
{
    public static class Helpers
    {

        /// <summary>
        /// Converts the CreateTodoViewModel to TodoViewModel and assigns new guid to Id field
        /// </summary>
        /// <param name="todo">Create todo view model</param>
       /// <returns>New TodoViewModel with generated Id</returns>
        public static TodoViewModel ToViewModel(this CreateTodoViewModel todo)
        {
            return new TodoViewModel()
            {
                Id = Guid.NewGuid(),
                Title = todo.Title,
                Description = todo.Description,
                DueDate = todo.DueDate,
                Status = todo.Status
            };
        }

    }


}
