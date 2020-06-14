using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace BlazorZoom.Shared.ZoomModels
{
    public class JoinMeetingDto
    {

        public long MeetingId { get; set; }
        [Required]
        [MaxLength(25)]
        public string UserName { get; set; }
        public string MeetingPwd { get; set; }
        public MemberRole MemberRole { get; set; }
        [Required]
        public string APIKey { get; set; }
        [Required]
        public string APISecret { get; set; }
    }
    public enum MemberRole {
        Attendee,
        Host
    }
}
