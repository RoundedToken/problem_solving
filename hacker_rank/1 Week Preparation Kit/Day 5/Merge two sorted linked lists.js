// https://www.hackerrank.com/challenges/one-week-preparation-kit-merge-two-sorted-linked-lists/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-five
function mergeLists(head1, head2) {
    if (!head1) {
        return head2
    }
    if (!head2) {
        return head1
    }
    if (head1.data < head2.data) {
        head1.next = mergeLists(head1.next, head2)
        return head1
    } else {
        head2.next = mergeLists(head1, head2.next)
        return head2
    }
}
function main() {
}
if (require.main === module) {
    main();
}