using AlmostTrello.BusinessEntities;
using AlmostTrello.DataAccess.Interfaces;
using AlmostTrello.Infrastructure.Interfaces;
using System.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AlmostTrello.Utilities;
using AlmostTrello.BusinessEntities.ViewModels;
using AlmostTrello.DataEntities.DataModels;
using Newtonsoft.Json;
using AlmostTrello.DataAccess.Helpers;

namespace AlmostTrello.DataAccess.Implementations
{
    public class TodoRepository : ITodoRepository
    {
        #region Variables
        private readonly IUow _uow;
        #endregion

        #region Constructor
        public TodoRepository(IUow uow)
        {
            _uow = uow;
        }
        #endregion

        #region Repository Methods
        public async Task<TodoViewModel?> Get(Guid todoId)
        {
            var todo = await _uow.Repository<Todo>().GetById(todoId);
            if (todo == null) return null;
            return todo.ToViewModel();
        }

        public async Task Create(TodoViewModel model)
        {
            await _uow.Repository<Todo>().Create(model.ToDataModel());
        }

        public async Task<bool> Delete(Guid id)
        {
            var todo = await _uow.Repository<Todo>().Delete(id);
            return todo.Id == id.ToString();
        }

        public async Task<List<TodoViewModel>> GetAll()
        {
            var todoList = await _uow.Repository<Todo>().GetAll();
            if (todoList == null) return null;
            return todoList.ToViewModelList();
        }

       public  async Task<TodoViewModel> Update(TodoViewModel model)
        {
            var todo = await _uow.Repository<Todo>().Update(model.ToDataModel());
            return todo.ToViewModel();
        }
        #endregion
    }
}
