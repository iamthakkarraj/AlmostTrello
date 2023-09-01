using AlmostTrello.BusinessEntities;
using AlmostTrello.BusinessEntities.ViewModels;
using AlmostTrello.DataEntities.DataModels;

namespace AlmostTrello.BusinessLogic.Interfaces
{
    public interface ITodoService
    {
        Task<TodoViewModel?> Get(Guid todoId);
        Task<List<TodoViewModel>> GetAll();
        Task<TodoViewModel> Create(TodoViewModel model);
        Task<TodoViewModel> Update(TodoViewModel model);
        Task<bool> Delete(Guid id);
    }
}