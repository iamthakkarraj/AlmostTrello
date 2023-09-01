using AlmostTrello.BusinessEntities.ViewModels;
using AlmostTrello.DataEntities.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlmostTrello.DataAccess.Helpers
{
    public static class Helpers
    {

        public static TodoViewModel ToViewModel(this Todo todo)
        {
            return new TodoViewModel()
            {
                Id = Guid.Parse(todo.Id),
                Title = todo.Title,
                Description = todo.Description,
                DueDate = DateTime.Parse(todo.DueDate),
                Status = todo.Status
            };
        }

        public static List<TodoViewModel> ToViewModelList(this List<Todo> todoList)
        {
            var list = new List<TodoViewModel>();
            foreach (var todo in todoList)
            {
                list.Add(new TodoViewModel()
                {
                    Id = Guid.Parse(todo.Id),
                    Title = todo.Title,
                    Description = todo.Description,
                    DueDate = DateTime.Parse(todo.DueDate),
                    Status = todo.Status
                });
            }
            return list;
        }

        public static Todo ToDataModel(this TodoViewModel todo)
        {
            return new Todo()
            {
                Id = todo.Id.ToString(),
                Title = todo.Title,
                Description = todo.Description,
                DueDate = todo.DueDate.ToString(),
                Status = todo.Status
            };
        }

        public static User ToDataModel(this RegistrationViewModel todo)
        {
            return new User()
            {
                Id = Guid.NewGuid().ToString(),
                Name = todo.Name,
                Email = todo.Email,
                Password = todo.Password,
            };
        }

    }


}
