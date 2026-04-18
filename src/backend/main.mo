import Types "types/contact";
import ContactApi "mixins/contact-api";
import List "mo:core/List";

actor {
  let submissions = List.empty<Types.ContactSubmission>();
  let nextId : [var Nat] = [var 0];

  include ContactApi(submissions, nextId);
};
