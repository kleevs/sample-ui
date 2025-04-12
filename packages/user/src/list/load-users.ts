type UserSearchCriteria = {
    email: string;
    lastName: string;
    firstName: string;
}

export async function loadUsers(criteria: UserSearchCriteria) {
    return [
        { email: 'firstname.lastname@email.com', firstName: 'firstName', lastName: 'lastName' },
        { email: 'second.lastname@email.com', firstName: 'firstName', lastName: 'lastName' },
        { email: 'third.lastname@email.com', firstName: 'firstName', lastName: 'lastName' }
    ]
        .filter(u => (!criteria.email || u.email.startsWith(criteria.email)) &&
            (!criteria.lastName || u.lastName.startsWith(criteria.lastName)) &&
            (!criteria.firstName || u.firstName.startsWith(criteria.firstName)));
}