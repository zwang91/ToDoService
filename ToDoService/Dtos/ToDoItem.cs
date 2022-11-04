namespace ToDoService.Dtos
{
    public class ToDoItem
    {
        public long Id { get; set; }
        
        public string Title { get; set; }

        public string Description { get; set; }

        public bool IsDone { get; set; }
    }
}