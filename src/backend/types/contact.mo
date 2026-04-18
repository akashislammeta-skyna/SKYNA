import Time "mo:core/Time";

module {
  public type ContactId = Nat;
  public type Timestamp = Time.Time;

  public type ContactSubmission = {
    id : ContactId;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    service_interest : Text;
    submitted_at : Timestamp;
  };

  public type ContactInput = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    service_interest : Text;
  };
};
