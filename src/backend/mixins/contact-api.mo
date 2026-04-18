import Types "../types/contact";
import ContactLib "../lib/contact";
import List "mo:core/List";

mixin (
  submissions : List.List<Types.ContactSubmission>,
  nextId : [var Nat],
) {
  public shared func submitContactForm(input : Types.ContactInput) : async Types.ContactSubmission {
    ContactLib.submitContact(submissions, nextId, input);
  };

  public query func listContactSubmissions() : async [Types.ContactSubmission] {
    ContactLib.listSubmissions(submissions);
  };
};
