﻿using System;

namespace PetSupport.Core.Entities

{
    public class BookingMessage : BaseEntity
    {

        public BookingMessage()
        {
            SendData = DateTime.Now;
        }
        
        public DateTime SendData { get; private set; }

        public string Text { get; set; }
        public DateTime SentDate { get; set; }

        //Relationships
        public int? PetsitterId { get; set; }
        public Petsitter Petsitter { get; set; }

        public int? ClientId { get; set; }
        public Client Client { get; set; }
    }
}