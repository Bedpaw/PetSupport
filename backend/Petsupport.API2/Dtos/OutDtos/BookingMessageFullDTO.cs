using System;

namespace Petsupport.API2.Dtos.OutDtos
{
    public class BookingMessageFullDTO
    {
        public int Id { get; set; }
        public string SendDate { get; set; }
        public string Message { get; set; }
        public int ClientId { get; set; }
        public int PetsitterId { get; set; }
    }
}