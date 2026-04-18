import Types "../types/contact";
import List "mo:core/List";
import Time "mo:core/Time";

module {
  public func submitContact(
    submissions : List.List<Types.ContactSubmission>,
    nextId : [var Nat],
    input : Types.ContactInput,
  ) : Types.ContactSubmission {
    let id = nextId[0];
    nextId[0] := id + 1;
    let submission : Types.ContactSubmission = {
      id;
      name = input.name;
      email = input.email;
      phone = input.phone;
      message = input.message;
      service_interest = input.service_interest;
      submitted_at = Time.now();
    };
    submissions.add(submission);
    submission;
  };

  public func listSubmissions(
    submissions : List.List<Types.ContactSubmission>
  ) : [Types.ContactSubmission] {
    submissions.toArray();
  };
};
