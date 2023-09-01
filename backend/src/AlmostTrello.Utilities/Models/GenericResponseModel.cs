namespace AlmostTrello.Utilities.Models
{
    public class GenericResponseModel<TEntity> where TEntity : class
    {
        public int ErrorCount { get; set; } = 0;
        public string[] ErrorMessages { get; set; } = Enumerable.Empty<string>().ToArray();
        public TEntity? Data { get; set; }
        public GenericResponseModel(TEntity entity)
        {
            Data = entity;
        }

        public GenericResponseModel()
        {
        }
    }
}